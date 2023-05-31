
// const LOCATIONS = [
//     {name: "TR Laser Bridge", isPearl: true},
//     {name: "Brewery", isPearl: false},
//     {name: "IP Pengator Room", isPearl: true},
//     {name: "Hype Cave", isPearl: false},
//     {name: "C-House", isPearl: true},
//     {name: "Mire Lobby Chest", isPearl: false},
//     {name: "Mothula", isPearl: true},
//     {name: "TT First Four", isPearl: false},
//     {name: "Superbunny Cave", isPearl: true},
//     {name: "GT Hope Room", isPearl: false},
// ];

function LocationQuestion({location}){
    return(
        <div>
            {location.name}
        </div>
    )
}

export default LocationQuestion