'use strict';

class UF{
	constructor(n){
		this.N = n;
		this.connections = [];
		for(let i = 0; i < this.N; i++ ) {
			this.connections[i] = i;
		}
    }
    
    connected(p, q){
		
    }
	
	union(p, q){
	
	}
};

class Main {
    static start(N, connections){
		let uf = new UF(N);
		while (!StdIn.isEmpty()) {
			let p = StdIn.readInt();
			let q = StdIn.readInt();
			if (!uf.connected(p, q)) {
				uf.union(p, q);
				StdOut.println(p + " " + q);
			}
		}
    }
}

Main.start();
