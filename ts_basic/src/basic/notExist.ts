// export default function notExistSample() {
//   let name = null
//   console.log('notExistSample 1:', typeof name, name)
//   name = 'MSY'
//   if (name) {
//     console.log('notExistSample 2:', typeof name, '나의 이름은' + name)
//   } else {
//     console.log('notExistSample 3:', '나의 이름은' + name)
//   }
// }
export default function notExistSample() {
  let name = null
  console.log('notExistSample 1:', typeof name, name)
  name = 'msg'
  if (name) {
    console.log('notExist sample 2:', typeof name, '나의 이름은 ' + name)
  } else {
    console.log('notExist sample 3:', '나의 이름은 ' + name)
  }
  let age = undefined
  console.log('notExist sample 4:', typeof age, age)
  age = 28
  if (age) {
    console.log('notExist sample 5:', typeof age, '나이는 ' + age + '입니다.')
  } else {
    console.log('notExist sample 6:', '나이는 비밀!')
  }
}
