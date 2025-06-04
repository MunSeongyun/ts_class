export default function callbackSample() {
  const url = 'https://api.github.com/users/MunSeongyun';

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        return res.json() // .json()는 Promise를 반환
          .then((json) => {
            console.log('Asynchronous Callback Sample 1:', json); // 나중에 출력됨
            return json;
          })
          .catch((error) => {
            console.error(error);
            return null;
          });
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  };

  const profile = fetchProfile();
  console.log('Asynchronous Callback Sample 2:', profile); // 먼저 출력, Pending 상태
}
