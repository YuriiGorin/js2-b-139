import App from "./game/App";
import Service from "./game/Service";

const app = new App();

window.addEventListener("load", () => {

    // document.body.addEventListener("keypress", function() {
    //    if (/* нажата буква */) {
    //    		if (app.status === "ready") {
    //    			app.start();
    //    		} else {
    //    			return;
    //    		}

    //    		let letter = /* выбранная пользователем клавиша */;

    //    		// let task = app.getCurrentTask();
    //    		// if (task.checkAnswer(letter)) {

    //    		// }

    //    		// if(app.setAnswer(letter)) {

    //    		// }
    //    		// if (app.currentTask.check())

    //    		app.checkAnswer(letter, (correct) => {
    //    			if (isCorrect) {
		  //   		// отметить кнопку
		  //   	} else {
		  //   		// подсветить кнопку красный цветом
		  //   	}
    //    		});

    //    		app.sendAnswer(letter);
    //    }
    // });

    // app.on("task:checked", (isCorrect) => {
    // 	if (isCorrect) {
    // 		// отметить кнопку
    // 	} else {
    // 		// подсветить кнопку красный цветом
    // 	}
    // })

    app.on("task:changed", function() {
    	let letters = this.task.getData();
    	// преобразуем letters в набор кнопочек
    	// обновляем номера вопросов
    	// this.taskNumber // this.task.number
    	// this.tasksCount
    });

    app.on("completed", function() {
    	let stats = app.getStats();
    	// показываем статистику
    });

    app.on("ready", function() {
    	document.body.addEventListener("keypress", function() {
	       if (/* нажата буква */) {
	       		let letter = /* выбранная пользователем клавиша */;
	       		app.checkAnswer(letter, (correct) => {
	       			if (isCorrect) {
			    		// отметить кнопку
			    	} else {
			    		// подсветить кнопку красный цветом
			    	}
	       		});
	       }
	    });
    });

    app.on("await-restore", function() {
    	if (/* пользователь согласился */) {
    		app.restore();
    	} else {
    		app.restart();
    	}
    });

    window.onbeforeunload = function() {
    	if (app.status === "active") {
    		app.save();
    	}
    }

});