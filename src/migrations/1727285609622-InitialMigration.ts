import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1727285609622 implements MigrationInterface {
    name = 'InitialMigration1727285609622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "bairro" character varying(100) NOT NULL, "rua" character varying(150), "numero" character varying(7), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_tipo_de_conta_enum" AS ENUM('Comprador', 'Produtor')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "nome" character varying(50) NOT NULL, "cpf" character varying(30) NOT NULL, "celular" character varying(30) NOT NULL, "tipo_de_conta" "public"."users_tipo_de_conta_enum" NOT NULL DEFAULT 'Produtor', "addressId" integer, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_tipo_de_conta_enum"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
