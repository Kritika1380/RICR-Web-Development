function AddData() {
  const Site = document.getElementById("siteName").value.trim();
  const UN = document.getElementById("userName").value.trim();
  const PS = document.getElementById("password").value.trim();

  const DataPacket = {
    webSite: Site,
    userName: UN,
    password: PS,
  };

  console.log(DataPacket);

  // if(localStorage.getItem("PasswordManager")){
  //     const Data = JSON.parse(localStorage.getItem("PasswordManager"))
  // }
  // else{
  //     const Data =[];
  // }

  const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];

  Data.push(DataPacket);

  localStorage.setItem("PasswordManager", JSON.stringify(Data));

  document.getElementById("siteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
}

function DownloadFile() {
  const data = JSON.parse(localStorage.getItem("PasswordManager")) || [];

  if (data.length <= 0) {
    alert("No Data Found");
    return;
  }

  const headers = Object.keys(data[0]).join(",") + "\n";

  const rows = data.map((item) => Object.values(item).join(",")).join("\n");

  const CSVContent  = headers + rows;

  const blob = new Blob([CSVContent],{type: "text/css"});

  const ancharTag = document.createElement("a");

  ancharTag.href = URL.createObjectURL(blob);
  ancharTag.download = "data.csv"
  document.body.appendChild(ancharTag)
  ancharTag.click();
  document.body.remove(ancharTag);
  
}
