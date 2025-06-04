export default function promiseSample() {
  const url = 'https://api.github.com/users/MunSeongyun';

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null> 

  // executor 함수 Promise가 생성되자마자 자동으로 실행, 작업이 성공하면 resolve, 실패하면 reject 호출
  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          return res.json()
            .then((json: Profile) => {
              console.log('Asynchronous Promise Sample 1:', json)
              resolve(json) // 실행되면 .then() 함수가 실행됨
            })
            .catch((error) => { console.error(error); reject(null) }) // 실행되면 .catch() 함수가 실행됨
        })
        .catch((error) => { console.error(error); reject(null) }) // 실행되면 .catch() 함수가 실행됨
    });
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      console.log('Asynchronous Promise Sample 2:', profile)
    })
    .catch(() => {})
}
