const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [info, ...scores] = input
const [num, answerCountry] = info.split(' ')

// 큰순서대로 (maxIndex)
function selectionArrange(arrays) {    
    for(let i=0; i<arrays.length; i++) {
        let maxIndex = i // 타겟이될인덱스
        const [countryMax, gMax, sMax, bMax] = arrays[maxIndex].split(' ').map(Number)
        
        for(let j=maxIndex+1; j<arrays.length; j++) { // maxIndex 교체
            const [countryNext, gNext, sNext, bNext] = arrays[j].split(' ').map(Number)

            if(gMax < gNext) {
                maxIndex = j
            } else if (gMax === gNext) { // gold same score
                if(sMax < sNext) {
                    maxIndex = j
                } else if (sMax === sNext) { // silver same score
                    if(bMax < bNext) { 
                        maxIndex = j
                    } 
                }
            }
        }

        if(maxIndex !== i) { // maxIndex 교체가 되었다면 서로 위치바꾸기
            let temp = arrays[maxIndex]
            arrays[maxIndex] = arrays[i]
            arrays[i] = temp
        }
    }

    arrays.reduce((acc, curr, idx, arr) => {
      const [targetCountry, ...medals] = curr.split(' ');
      const totalScore = Number(medals[0] + medals[1] + medals[2]);
      const prevItem = acc[idx-1];
      
      let currItem = {
        targetCountry: targetCountry,
        ranking: idx === 0 ? 1 : prevItem.ranking,
        totalScore: totalScore
      }
      
      if(prevItem && prevItem.totalScore !== totalScore) {
        currItem.ranking = idx + 1
      }

      if(currItem.targetCountry === answerCountry) {
        answer = currItem.ranking
      }

      return acc.concat(currItem)
    }, [])
    
    return answer
}

console.log(selectionArrange(scores))



