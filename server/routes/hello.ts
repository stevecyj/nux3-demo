export default defineEventHandler((event) => {
  const data = {
    name: "Anakin",
    age: 36,
  };
  return { data };
});
