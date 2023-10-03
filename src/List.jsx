const items = [
  { title: "Our Services", id: 1 },
  { title: "Pricing", id: 2 },
  { title: "Find Us", id: 3 },
  { title: "About", id: 4 },
];

const List = () => {
  const list = items.map((item) => <li key={item.id}>{item.title}</li>);
  return <ul>{list}</ul>;
};

export default List;
