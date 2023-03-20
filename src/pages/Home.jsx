import ListPosts from "../components/ListPosts"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListPosts url={"/posts"} />
    </main>
  )
}

export default Home
