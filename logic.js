'use strict';

class UF{
	constructor(n){
		this.N = n;
		this.id = [];
		for(let i = 0; i < this.N; i++ ) {
			this.id[i] = i;
		}
    }
    
    connected(p, q){
		return this.id[p] === this.id[q];		
    }
	
	union(p, q){
		let pid = this.id[p];
		let qid = this.id[q];
		debugger;
		for (let i = 0; i < this.N; i++){
			if (this.id[i] === pid) {
				this.id[i] = qid;
			}
		}
	}
	
	idArray(){
		return this.id.join(', ');
	}
	
};

class QuickUnionUF{
	constructor(n){
		this.N = n;
		this.id = [];
		for(let i = 0; i < this.N; i++ ) {
			this.id[i] = i;
		}
    }
	
	root(i) {
		while(i !== this.id[i]) {
			this.id[i] = this.id[this.id[i]];
			i = this.id[i];
		}
		return i;
	}
    
    connected(p, q){
		return this.root(p) === this.root(q);		
    }
	
	union(p, q){
		let pid = this.root(p);
		let qid = this.root(q);
		this.id[pid] = qid;
	}
	
	idArray(){
		return this.id.join(', ');
	}
}

class Main {
    static start(N, connections){
		let uf = new QuickUnionUF(N);
		let output = '';
		connections.forEach((item) => {
			let p = parseInt(item[0]);
			let q = parseInt(item[1]);
			//debugger;
			if (!uf.connected(p, q)) {
				uf.union(p, q);
				output += p + ' ' + q + '\n';
			}
		});
		return output + '\n' + uf.idArray();
		console.log('ok');
    }
}

//Main.start();
