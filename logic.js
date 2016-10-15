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
		return this.connections[p] === this.connections[q];		
    }
	
	union(p, q){
	
	}
};

class Main {
    static start(N, connections){
		//debugger;
		let uf = new UF(N);
		connections.forEach((item) => {
			let p = item[0];
			let q = item[1];
			if (!uf.connected(p, q)) {
				// uf.union(p, q);
				// StdOut.println(p + " " + q);
				console.log('not connected')
			}
		});
		console.log('ok');
    }
}

//Main.start();
