// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

//   console.log(mockUpStrand());

//Factory Funcion

const pAequorFactory = (orgNumber, newStrand) =>{
    return {
            specimenNum : orgNumber,
            dna : newStrand
    }
};
