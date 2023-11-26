// Fake function mocking an api
export async function fetchUsers(search) {
  if (search.length == 0) return;
  let res = await fetch('https://dummyjson.com/users');
  let resJson = await res.json();

  console.log('resJson', resJson);
  return resJson?.users
    .filter((u) => {
      return u.firstName.toLowerCase().includes(search.toLowerCase());
    })
    .map((u) => u.firstName);
}
