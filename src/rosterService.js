const roster = [
  {
    id: 1,
    name: 'Blake Griffin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Blake_Griffin_with_ball_20131118_Clippers_v_Grizzles.jpg/1200px-Blake_Griffin_with_ball_20131118_Clippers_v_Grizzles.jpg'
  },
  {
    id: 2,
    name: 'Deandre Jordan',
    image: 'http://hoopshabit.com/files/2015/12/deandre-jordan-nba-orlando-magic-los-angeles-clippers.jpg'
  },
  {
    id: 3,
    name: 'Patrick Beverley',
    image: 'https://cdn.vox-cdn.com/thumbor/evR1Li0s1SdJzKJ0t-LG4NT_RSo=/0x159:2377x1744/1200x800/filters:focal(0x159:2377x1744)/cdn.vox-cdn.com/uploads/chorus_image/image/45693102/463158610.0.jpg'
  }
]

export function getRoster() {
  return roster;
}

export function getPlayer(id) {
  return roster.find(player => player.id == id);
}