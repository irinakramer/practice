const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    'Marketplace-Farm',
    'Marketplace-Post Office',
    'Marketplace-Shop',
    'Marketplace-Town Hall',
    'Shop-Town Hall',
];

function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map((r) => r.split('-'))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);
// {Alice's House:	["Bob's House", "Cabin", "Post Office"], ...}

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this; // returns old state
        } else {
            // move parcels to new destination
            // create new parcels
            let parcels = this.parcels
                .map((p) => {
                    if (p.place != this.place) return p; // if parcel is not at current location, return it as is
                    return { place: destination, address: p.address }; // else assign destination to its location (move it or deliver it)
                })
                .filter((p) => p.place != p.address); // remove delivered parcels

            return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState('Post Office', [
    { place: 'Post Office', address: "Alice's House" },
]);
let next = first.move("Alice's House");

console.log(next.place); // Alice's House
console.log(next.parcels); // []
console.log(first.place); // Post Office

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns.`);
            break;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}.`);
    }
}
