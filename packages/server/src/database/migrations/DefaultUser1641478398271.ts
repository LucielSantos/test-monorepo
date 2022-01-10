import { MigrationInterface, QueryRunner } from "typeorm";
import { Users } from "../entities/Users";

export class DefaultUser1641478398271 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    console.log("Run migrations");
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({
        id: 1,
        email: "admi@admin.com",
        fullName: "User default",
        phone: "00000000",
        cpf: "405.678.450-79",
        password:
          "$2b$10$Rp2UwdGS6YKSVtb7TgIadOynV2kREousiOfjc6kkAmiOnnUprGIhS",
        operationAccessAll: true,
        status: true,
        typeId: 1,
      })
      .execute();
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .delete()
      .from(Users)
      .where("id = :id", { id: 1 })
      .execute();
  }
}
