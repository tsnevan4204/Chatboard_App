async function main() {
    const ChatBoard = await ethers.getContractFactory("ChatBoard");
    const chatBoard = await ChatBoard.deploy();
  
    await chatBoard.waitForDeployment();
    console.log("ChatBoard deployed to:", await chatBoard.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });