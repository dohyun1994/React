function generateRandomId(n) {
    const nums = new Array(n).fill(0)
    return nums.map( n => Math.floor(Math.random()*10)).join("")    // 0 <= n <10   Math.floor() 소숫점 버림
}

function generateRandomString(n){ 
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
    const str = new Array(n).fill('a') 
    return str.map(s => alphabet[Math.floor(Math.random()*alphabet.length)]).join("")
}

const dummyData = [
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription : generateRandomString(100),
        videoAuthor : generateRandomString(10)
    },

    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription : generateRandomString(100),
        videoAuthor : generateRandomString(10)
    },

    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription : generateRandomString(100),
        videoAuthor : generateRandomString(10)
    },

    
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription : generateRandomString(100),
        videoAuthor : generateRandomString(10)
    },

    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription : generateRandomString(100),
        videoAuthor : generateRandomString(10)
    },

]

export default dummyData;