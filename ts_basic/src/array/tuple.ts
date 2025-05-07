export default function tupleSample() {
    const response:[number, string] = [200,'OK']
    console.log(response);
    const newJeans:[string,...string[]] = ['하니','다니엘','민지','해린']
    newJeans.push('혜인')
    console.log(newJeans);

    const gf4 : [...boolean[],string] = [false,'false']
    gf4.push(false)
    console.log(gf4)
    
    const gf41 : [string,...boolean[]] = ['false',false]
    gf41.push(false)
    gf41.push('false')
    console.log(gf41)

    const gf5 : [string, ...boolean[]] = ['false', false]
    gf5.push('string')
    console.log(gf5)
}