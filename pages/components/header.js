export default function Header(props) {
  return (
    <h1
      style={{ backgroundColor: `#abc`, color: `white` }}
    >{props.title}</h1>
  );
}

Header.defaultProps = {
  title: "共通ヘッダータイトル"
}