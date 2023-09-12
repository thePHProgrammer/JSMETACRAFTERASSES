/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _nickname, _favoriteArtist, _bling) {
    const NFT = {
        "name": _name,
        "nickname": _nickname,
        "favoriteArtist": _favoriteArtist,
        "bling": _bling
    }
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("List of NFTs:");
    for (let i = 0; i < NFTs.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log(`Name: ${NFTs[i].name}`);
        console.log(`Nickname: ${NFTs[i].nickname}`);
        console.log(`Favorite Artist: ${NFTs[i].favoriteArtist}`);
        console.log(`Bling: ${NFTs[i].bling}`);
        console.log("--------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFTs Minted: ${NFTs.length}`);
}

// call your functions below this line
mintNFT("Noriel", "Nori", "Swift", "Necklace");
mintNFT("Alice", "Alicia", "Picasso", "Crown");
mintNFT("Bob", "Bobby", "Van Gogh", "Ring");

listNFTs();
getTotalSupply();
