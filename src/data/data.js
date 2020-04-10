const players = [
  {
    playerName: "Harry Thacker",
    playerImg:
      "https://bristolsport.azureedge.net/media/40591/harry-thacker.jpg?w=540&h=540&mode=crop",
    position: "Hooker",
    positionNum: 2,
    attacking: 70,
    defending: 80,
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "John Afoa",
    playerImg:
      "https://bristolsport.azureedge.net/media/40601/john-afoa.jpg?w=540&h=540&mode=crop",
    position: "Prop",
    positionNum: 3,
    attacking: 50,
    defending: "50",
    strength: "5",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Joe Joyce",
    playerImg:
      "https://bristolsport.azureedge.net/media/40600/joe-joyce.jpg?w=540&h=540&mode=crop",
    position: "Lock",
    positionNum: 4,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Steven Luatua",
    playerImg:
      "https://bristolsport.azureedge.net/media/40617/steven-luatua.jpg?w=540&h=540&mode=crop",
    position: "Flanker",
    positionNum: 6,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Nathan Hughes",
    playerImg:
      "https://bristolsport.azureedge.net/media/40609/nathan-hughes.jpg?w=540&h=540&mode=crop",
    position: "No. 8",
    positionNum: 8,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Chris Vui",
    playerImg:
      "https://bristolsport.azureedge.net/media/42754/chris-vui.jpg?w=540&h=540&mode=crop",
    position: "Lock",
    positionNum: 5,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Dave Attwood",
    playerImg:
      "https://bristolsport.azureedge.net/media/40586/dave-attwood.jpg?w=540&h=540&mode=crop",
    position: "Lock",
    positionNum: 5,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Will Capon",
    playerImg:
      "https://bristolsport.azureedge.net/media/40622/will-capon.jpg?w=540&h=540&mode=crop",
    position: "Hooker",
    positionNum: 2,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Max Lahiff",
    playerImg:
      "https://bristolsport.azureedge.net/media/41955/max-lahiff.jpg?w=540&h=540&mode=crop",
    position: "Prop",
    positionNum: 3,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Yann Thomas",
    playerImg:
      "https://bristolsport.azureedge.net/media/40623/yann-thomas.jpg?w=540&h=540&mode=crop",
    position: "Prop",
    positionNum: 1,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Luke Morahan",
    playerImg:
      "https://bristolsport.azureedge.net/media/40606/luke-morahan.jpg?w=540&h=540&mode=crop",
    position: "Wing",
    positionNum: 14,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Charles Piatau",
    playerImg:
      "https://bristolsport.azureedge.net/media/40583/charles-piutau.jpg?w=540&h=540&mode=crop",
    position: "Fullback",
    positionNum: 15,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Piers O'Conor",
    playerImg:
      "https://bristolsport.azureedge.net/media/40613/piers-oconnor.jpg?w=540&h=540&mode=crop",
    position: "Centre",
    positionNum: 13,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Harry Randall",
    playerImg:
      "https://bristolsport.azureedge.net/media/40590/harry-randall.jpg?w=540&h=540&mode=crop",
    position: "Scrum Half",
    positionNum: 9,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Callum Sheedy",
    playerImg:
      "https://bristolsport.azureedge.net/media/40582/callum-sheedy.jpg?w=540&h=540&mode=crop",
    position: "Fly Half",
    positionNum: 10,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Andy Uren",
    playerImg:
      "https://bristolsport.azureedge.net/media/40580/andy-uren.jpg?w=540&h=540&mode=crop",
    position: "Scrum Half",
    positionNum: 9,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Henry Purdy",
    playerImg:
      "https://bristolsport.azureedge.net/media/46345/thumbnail_henry-purdy.jpg?w=540&h=540&mode=crop",
    position: "Wing",
    positionNum: 11,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Siale Piatau",
    playerImg:
      "https://bristolsport.azureedge.net/media/42757/siale-piutau.jpg?w=540&h=540&mode=crop",
    position: "Centre/Wing",
    positionNum: 13,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Ian Madigan",
    playerImg:
      "https://bristolsport.azureedge.net/media/40592/ian-madigan.jpg?w=540&h=540&mode=crop",
    position: "Fly Half",
    positionNum: 10,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Alapati Leiua",
    playerImg:
      "https://bristolsport.azureedge.net/media/42753/alapati-leiua.jpg?w=540&h=540&mode=crop",
    position: "Wing",
    positionNum: 11,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Tiff Eden",
    playerImg:
      "https://bristolsport.azureedge.net/media/40618/tiff-eden.jpg?w=540&h=540&mode=crop",
    position: "Fly Half",
    positionNum: 10,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Jake Heenan",
    playerImg:
      "https://bristolsport.azureedge.net/media/40596/jake-heenan.jpg?w=540&h=540&mode=crop",
    position: "Flanker",
    positionNum: 7,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Kyle Sinckler",
    playerImg:
      "https://cdn.rugbypass.com/player-image.php?img=images/players/804/580x580/1771.jpg",
    position: "Prop",
    positionNum: 3,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Semi Radradra",
    playerImg:
      "https://cdn.rugbypass.com/wp/wp-content/uploads/2019/11/Semi-Bears.jpg",
    position: "Centre/Wing",
    positionNum: 13,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Jake Armstrong",
    playerImg:
      "https://bristolsport.azureedge.net/media/40595/jake-armstrong.jpg?w=540&h=540&mode=crop",
    position: "Prop",
    positionNum: 1,
    attacking: "40",
    defending: "70",
    strength: "85",
    speed: "55",
    experience: "60"
  },
  {
    playerName: "Joe Batley",
    playerImg:
      "https://bristolsport.azureedge.net/media/40599/joe-batley.jpg?w=540&h=540&mode=crop",
    position: "Lock",
    positionNum: 5,
    attacking: "55",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Sam Bedlow",
    playerImg:
      "https://bristolsport.azureedge.net/media/41019/thumbnail_sam-bedlow.jpg?w=540&h=540&mode=crop",
    position: "Centre",
    positionNum: 12,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Ryan Edwards",
    playerImg:
      "https://bristolsport.azureedge.net/media/40614/ryan-edwards.jpg?w=540&h=540&mode=crop",
    position: "Wing",
    positionNum: 11,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Ed Holmes",
    playerImg:
      "https://bristolsport.azureedge.net/media/40587/ed-holmes.jpg?w=540&h=540&mode=crop",
    position: "Lock",
    positionNum: 4,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Jordan Lay",
    playerImg:
      "https://bristolsport.azureedge.net/media/42756/jordan-lay.jpg?w=540&h=540&mode=crop",
    position: "Prop",
    positionNum: 3,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Jake Armstrong",
    playerImg:
      "https://bristolsport.azureedge.net/media/40597/jake-woolmore.jpg?w=540&h=540&mode=crop",
    position: "Centre/Wing",
    positionNum: 13,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Will Hurrell",
    playerImg:
      "https://bristolsport.azureedge.net/media/40669/will-hurrell.jpg?w=540&h=540&mode=crop",
    position: "Centre",
    positionNum: 12,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
  {
    playerName: "Jake Heenan",
    playerImg:
      "https://bristolsport.azureedge.net/media/40596/jake-heenan.jpg?w=540&h=540&mode=crop",
    position: "Flanker",
    positionNum: 7,
    attacking: "70",
    defending: "80",
    strength: "85",
    speed: "77",
    experience: "80"
  },
];

export default players;
