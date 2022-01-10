import { DefaultUser1641478398271 } from "./migrations/DefaultUser1641478398271";
import path from "path";
import { Connection, createConnection } from "typeorm";
import { Todo } from "./entities/Todo";
import { Users } from "./entities/Users";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export class DatabaseBuilder {
  public connection: Connection | undefined;

  constructor() {
    this.init();
  }

  public async init(): Promise<void> {
    console.log(path.join(__dirname, "**", "migrations", "*.ts"));
    this.connection = await createConnection({
      type: "sqlite",
      database: path.join("./db.sqlite3"),
      entities: [Todo, Users],
      namingStrategy: new SnakeNamingStrategy(),
      migrations: [DefaultUser1641478398271],
      migrationsRun: true,
      synchronize: true,
      cli: {
        migrationsDir: "migrations",
      },
    });

    if (this.connection.isConnected) {
      this.connection.synchronize();
    }
  }
}
