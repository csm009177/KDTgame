# 1. 포켓몬스터 배열 '_pokemon'에 새로운 포켓몬을 추가해주세요. if나 for문을 사용하여 _pokemon 배열의 마지막에 새로운 포켓몬 이름을 추가하세요.
# pokemon = ['피카츄', '파이리', '이상해씨']
# new_pokemon = '꼬부기'
# for i in range(len(pokemon)):
#     if i == len(pokemon) - 1:
#         pokemon += [new_pokemon]
#         # pokemon[i] = new_pokemon
# print(pokemon)

# 2. '_pokemon' 배열의 마지막 포켓몬을 방출해주세요. 이를 위해 배열의 마지막 원소를 제거하고, 그 원소의 이름을 출력하세요.
# pokemon = ['피카츄', '파이리', '이상해씨']
# last_pokemon = pokemon[-1:] #마지막 요소
# print(last_pokemon)
# pokemon = pokemon[:-1]      #마지막 전까지 요소
# print(pokemon)

# 3. '_pokemon' 배열에서 찾고자 하는 포켓몬의 인덱스를 찾아주세요. 포켓몬이 배열에 없다면 -1을 출력하세요.
# pokemon = ['피카츄', '파이리', '이상해씨']
# wantPoke = '이상해씨'
# for i in range(len(pokemon)):
#   index= -1
#   if pokemon[i] == wantPoke :
#     index = i
#     break
# print(index)

# 4. '_pokemon' 배열에서 이름이 '리'로 시작하는 포켓몬만을 새로운 배열에 담아 출력해주세요.
# pokemon = ['피카츄', '파이리', '이상해씨']
# leeArray = []
# for i in range(len(pokemon)):
#   if pokemon[i][0]=='피':
#     leeArray = pokemon[i]
# print(leeArray)

# 5. '_pokemon' 배열에서 특정 포켓몬이 있는지 확인하고 결과를 출력해주세요.
# pokemon = ['피카츄', '파이리', '이상해씨']
# selectPokemon = "파이리"
# exists = False
# for i in range(len(pokemon)):
#   if pokemon[i] == selectPokemon:
#     exists = True
#     break
# if exists:
#     print("exist")
# else:
#     print("no exist")

# 6. '_pokemon' 배열의 원소들의 순서를 뒤집어 출력해주세요.
# pokemon = ['피카츄', '파이리', '이상해씨']

# for i in range(len(pokemon)): 
#     print(pokemon[-i-1])      
# pokemon[-0-1] => pokemon[-1-1] => pokemon[-2-1] 

# print("-"*10)
# print(pokemon[ 0]) #피카츄
# print(pokemon[-0]) #피카츄
# print(pokemon[-1]) #이상해씨
# print(pokemon[-2]) #파이리
# print(pokemon[-3]) #피카츄
# for i in reversed(pokemon):
#     print(i)

# 7. '_pokemon' 배열의 원소들을 가나다 순으로 정렬해 출력해주세요. 
# pokemon = ['피카츄', '파이리', '이상해씨']

# for i in range(0, len(pokemon)):   # range(0, 3)
#     min = i                             
#     print(" i :", i, "\n", "min :", min)
#     print("--"*10)        
#     for j in range(i, len(pokemon)):    # range(0, 3) ->s range(1, 3) -> range(2, 3)
#         if pokemon[j] < pokemon[min]:              
#             min = j
#         print(" i:", i,"  ","min:", min,"  ","j:", j )
#     pokemon[i], pokemon[min] = pokemon[min], pokemon[i] # 순서 바꾸기
#     print("--"*10)  
# print(pokemon)

# 8. '_pokemon' 배열에서 총 6개의 포켓몬만을 새로운 배열에 담아 출력해주세요.
# pokemon = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '이상해씨' ]
# newPoke = [];
# for i in range(len(pokemon)):
#     if len(newPoke) < 6:
#         newPoke = newPoke + [pokemon[i]]
# print(newPoke)


# 9. '_pokemon' 배열과 다른 하나인 '_digimon' 배열을 연결해 새로운 배열을 생성해주세요.
# pokemon = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '이상해씨' ]
# digimon = ['캬이츄', '츄이라', '리이파', '기부꼬']
# for i in range(len(pokemon)):
#         digimon = digimon + [pokemon[i]]
# print(digimon)


# 10. '_pokemon' 배열의 길이(length 프로퍼티 사용제외)를 출력해주세요.
# 11. '_pokemon' 배열에서 특정 인덱스의 포켓몬 이름을 새로운 이름으로 변경해주세요.
# 12. '_pokemon' 배열의 모든 포켓몬 이름 뒤에 'Lv2'를 붙여 새로운 배열을 만들어 출력해주세요.
# 13. '_pokemon' 배열의 모든 원소를 순회하며 출력해주세요.
# 14. '_pokemon' 배열에서 포켓몬스터 이름 '두'로 시작하는 조건에 알맞는 포켓몬 중 찾은 목록에서 두번째 포켓몬을 찾아 출력해주세요.
# 15. '_pokemon' 배열의 모든 원소마다 쉼표를 추가하여 하나의 문자열로 합쳐 출력해주세요.
# 16. '_pokemon' 배열의 중간지점에 해당하는 인덱스 이후의 원소를 모두 제거해주세요.
# 17. '_pokemon' 배열을 새로운 배열에 복사해 문서에 적절한 태그로 생성하여 출력해주세요.