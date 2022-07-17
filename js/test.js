const cc = console.log;

class Sandbox {

    isPrime(target){
        if (target <= 1) return false
        if (target <= 3) return true
        if (target % 2 == 0 || target % 3 == 0) return false;

        for (let i = 6; i <= target / 2; i=i+6){
            if ((target % 6) -1 == 0 || (target % 6) +1 == 0){
                return true;
            }
        }

        return false;
    }

    rng100(){
        return Math.floor(Math.random() * 100);
    }
}

let sandbox = new Sandbox();

/*
cc(sandbox.isPrime(95));
cc(sandbox.rng100());


*/