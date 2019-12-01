import Service from "./game/Service";
import App from "./game/App";

// аргументом передаем экземпляр класса Service
const app = new App(new Service());

app.on("ready", function() {
   console.log(this.task.getContent());
});
