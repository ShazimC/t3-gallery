import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786841sy02u.png&f=1&nofb=1&ipt=e05c4cac12ecde8f9ef5b5c3e5d6909a55ce8ec8048339699d5fc110e6d3aec9&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784812pkckd.png&f=1&nofb=1&ipt=9600e041bd2c94589c4b0557b6311b1a26e4a328d547f36c6b5151510bc3db6d&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG113.png&f=1&nofb=1&ipt=9c5882d41a698bb13d9430c5c950da80d4bba35990538e9ce9f87dc26a0d3f9b&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784740nls3r.png&f=1&nofb=1&ipt=4246c601a3e7bdf9acc854207c46c49bcd7f7f7498494f2b32001a9a02e4da90&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786841sy02u.png&f=1&nofb=1&ipt=e05c4cac12ecde8f9ef5b5c3e5d6909a55ce8ec8048339699d5fc110e6d3aec9&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784812pkckd.png&f=1&nofb=1&ipt=9600e041bd2c94589c4b0557b6311b1a26e4a328d547f36c6b5151510bc3db6d&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG113.png&f=1&nofb=1&ipt=9c5882d41a698bb13d9430c5c950da80d4bba35990538e9ce9f87dc26a0d3f9b&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784740nls3r.png&f=1&nofb=1&ipt=4246c601a3e7bdf9acc854207c46c49bcd7f7f7498494f2b32001a9a02e4da90&ipo=images",
];

type Image = {
  id: number;
  url: string;
};

const mockImages: Image[] = mockUrls.map((url, index) => ({
  id: Math.floor(Math.random() * 1000) + index,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.id} - {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Link href={`/image/${image.id}`}>
              <img src={image.url} alt="pokemon" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
