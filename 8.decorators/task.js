function cachingDecoratorNew(func) {
	// Ваш код
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(",");
		let idx = cache.findIndex((item) => item.hash === hash);
		if (idx !== -1) {
			console.log("Из кэша: " + cache[idx].value);
			return "Из кэша: " + cache[idx].value;
		};
		let result = func.call(this, ...args);
		cache.push({ hash: hash, value: result });
		if (cache.length > 5) {
			cache.shift();
		};
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	};
	return wrapper;
};

function debounceDecoratorNew(func) {
	// Ваш код
	let immediate, flag = false;

	function wrapper(...args) {
		if (flag === false) {
			flag = true;
			immediate = func(...args)
		} else {
			clearTimeout(immediate)
			immediate = setTimeout(() => {
				func(...args);
				flag = false;
			}, ms);
		};
	};

	return wrapper;
}

function debounceDecorator2(func) {
	// Ваш код
	let immediate, flag = false;
	function wrapper(...args) {
		wrapper.count += 1;
		console.log(wrapper.count)
		if (flag === false) {
			flag = true;
			immediate = func(...args)
		} else {
			clearTimeout(immediate)
			immediate = setTimeout(() => {
				func(...args);
				flag = false;
			}, ms);
		};
	};
	wrapper.count = 0;
	return wrapper;
};
