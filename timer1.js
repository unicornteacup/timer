const args = process.argv;

const timer = function(args) {
  const times = args.slice(2);
  if (times === []) {
    return ;
  }
  
  for (let i = 0; i < times.length; i++) {
    if (times[i] < 0 || (isNaN(times[i]))) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07' + `${times[i]}`);
      }, times[i] * 1000);
    }
  }
}

timer(args);