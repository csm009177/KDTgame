// 1. 포켓몬스터 배열 '_pokemon'에 새로운 포켓몬을 추가해주세요. if나 for문을 사용하여 _pokemon 배열의 마지막에 새로운 포켓몬 이름을 추가하세요.
// const _pokemon = ['피카츄', '파이리', '이상해씨'];
// const newPokemon = '꼬부기';
// _pokemon[_pokemon.length] = newPokemon;
// console.log(_pokemon)
// 2. '_pokemon' 배열의 마지막 포켓몬을 방출해주세요. 이를 위해 배열의 마지막 원소를 제거하고, 그 원소의 이름을 출력하세요.
// const _pokemon = ['피카츄', '파이리', '이상해씨'];
// const newPokemon = '꼬부기';
// const lastPokemon = _pokemon[_pokemon.length-1]
// console.log(lastPokemon)
// _pokemon.length--
// console.log(_pokemon)

// 3. '_pokemon' 배열에서 찾고자 하는 포켓몬의 인덱스를 찾아주세요. 포켓몬이 배열에 없다면 -1을 출력하세요.
// const _pokemon = ['피카츄', '파이리', '이상해씨'];
// const wantPoke = "피카츄"
// for(i=0; i<_pokemon.length; i++){
//   let index = -1;
//   if(_pokemon[i]=== wantPoke){
//     index=i;
//   }
//   return console.log(index)
// }

// 4. '_pokemon' 배열에서 이름이 '리'로 시작하는 포켓몬만을 새로운 배열에 담아 출력해주세요.
// const _pokemon = ['피카츄', '파이리', '이상해씨'];
// let leeArray = [];
// for(i=0; i<_pokemon.length; i++){
  //   if(_pokemon[i][0]==="피"){
    //     leeArray = _pokemon[i]
    //   }
    // }
    // console.log(leeArray)
    
// 5. '_pokemon' 배열에서 특정 포켓몬이 있는지 확인하고 결과를 출력해주세요.
// const _pokemon = ['피카츄', '파이리', '이상해씨'];
// const selectPokemon = "피카"
// for(i=0; i<_pokemon.length; i++){
//   if(_pokemon[i]===selectPokemon){
//     console.log("exist")
//     return
//   } else{
//     console.log("no exist")
//     return
//   }
// }  

// 6. '_pokemon' 배열의 원소들의 순서를 뒤집어 출력해주세요.
// const _pokemon = ['피카츄', '파이리', '이상해씨'];
// for(i=0; i<_pokemon.length; i++){
//   console.log(_pokemon[2-i])   // 무조건 인덱스를 가져오는식
  // _pokemon[2-0] => _pokemon[2-1] => _pokemon[2-2] 
// }

// 7. '_pokemon' 배열의 원소들을 가나다 순으로 정렬해 출력해주세요.
// const _pokemon = ['피카츄', '파이리', '이상해씨'];

// for (let i = 0; i < _pokemon.length-1; i++) {
//   let min = i;
//   console.log(" i :", i, "\n", "min :", min)
//   console.log("---------------------------")        
//   for (let j = i; j < _pokemon.length; j++) {
//     console.log((`i:${i}  min:${min}  j:${j}` ))
//     if (_pokemon[j] < _pokemon[min]) {
//       min = j;
//     }
//   }
//   [_pokemon[i], _pokemon[min]] = [_pokemon[min], _pokemon[i]];
//   console.log("---------------------------")        
// }
// console.log(_pokemon)



// 8. '_pokemon' 배열에서 총 6개의 포켓몬만을 새로운 배열에 담아 출력해주세요.
// const _pokemon = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '이상해씨' ]
// let newPoke = [];
// for (let i = 0; i < _pokemon.length; i++) {
//   if (newPoke.length < 6) {
//       newPoke = [...newPoke, _pokemon[i]];
//     }
//   }
// console.log(newPoke);
  

// 9. '_pokemon' 배열과 다른 하나인 '_digimon' 배열을 연결해 새로운 배열을 생성해주세요.
// const pokemon =   ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '이상해씨' ]
// const digimon =   ['캬이츄', '츄이라', '리이파', '기부꼬']
// const newArray =  [pokemon + digimon]
// console.log(newArray)

// 10. '_pokemon' 배열의 길이(length 프로퍼티 사용제외)를 출력해주세요.
// const pokemon = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '이상해씨'];
// let count = 0;
// for (const i in pokemon) {
//   count = count + 1;
// }
// console.log(count);

// 11. '_pokemon' 배열에서 특정 인덱스의 포켓몬 이름을 새로운 이름으로 변경해주세요.
// const pokemon = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '이상해씨'];
// function changeName(i, name){
//   for(i in pokemon){
//     if (pokemon[i]<pokemon){
//       pokemon[i] = name
//     }
//   }
// }
// changeName(0, "깨꾸리")
// console.log(pokemon)

// 12. '_pokemon' 배열의 모든 포켓몬 이름 뒤에 'Lv2'를 붙여 새로운 배열을 만들어 출력해주세요.
const pokemon = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '이상해씨'];
const newPoke = []  
for(i in pokemon){
  newPoke[i] = pokemon[i] +" lv2"
}
console.log(newPoke)

// 13. '_pokemon' 배열의 모든 원소를 순회하며 출력해주세요.
// 14. '_pokemon' 배열에서 포켓몬스터 이름 '두'로 시작하는 조건에 알맞는 포켓몬 중 찾은 목록에서 두번째 포켓몬을 찾아 출력해주세요.
// 15. '_pokemon' 배열의 모든 원소마다 쉼표를 추가하여 하나의 문자열로 합쳐 출력해주세요.
// 16. '_pokemon' 배열의 중간지점에 해당하는 인덱스 이후의 원소를 모두 제거해주세요.
// 17. '_pokemon' 배열을 새로운 배열에 복사해 문서에 적절한 태그로 생성하여 출력해주세요.