import img from "../assets/react-core-concepts.png"

function Header() {
  const text = () => {
    const label = ["Fundamental", "Core", "Crucial"];
    return label[Math.floor(Math.random()*label.length)];
  }

  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {text()} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

export default Header;