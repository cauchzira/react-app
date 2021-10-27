export function createId() {
  const date = new Date();
  return (
    Math.floor(Math.random() * date.getHours() * 10000) + date.getMilliseconds()
  );
}
