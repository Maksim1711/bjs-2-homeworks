class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	};

	addClock(time, callback, id) {
		if (!id) {
			throw new Error('error text');
		};
		if (this.alarmCollection.find(clok => clok.id === id)) {
			console.error("The call already exists");
			return
		};
		this.alarmCollection.push({
			time,
			callback,
			id
		});
	};

	removeClock(id) {
		let successfully = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
		let failure = this.alarmCollection.length;
		return successfully > failure;
	};

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
	};

	start() {
		const checkAlarm = checkClock.bind(this);
		function checkClock(call) {
			if (this.getCurrentFormattedTime() === call.time) {
				return call.callback();
			};
		};
		if (this.timerId === null) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(elem => {
					checkAlarm(elem);
				})
			}, 1000);
		};
	};

	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		};
	};

	printAlarms() {
		this.alarmCollection.forEach(function (item) {
			console.log(`${item.id}, ${item.time}`);
		});
	};

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	};
};

function testCase() {
	let alarm = new AlarmClock;
	alarm.addClock("08:00", () => console.log("Пора вставать"), 1);
	alarm.addClock("08:01", () => { console.log("Давай, вставай уже!"); alarm.removeClock(2) }, 2);
	alarm.addClock("08:02", () => console.log("Иди умываться!"));
	alarm.addClock("08:03", () => {
		console.log("Вставай, а то проспишь!");
		alarm.clearAlarms();
		alarm.printAlarms();
	}, 3);
	alarm.addClock("08:04", () => console.log("Вставай!"), 1);
	alarm.printAlarms()
	alarm.start();
};