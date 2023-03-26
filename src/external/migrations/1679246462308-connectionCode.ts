import { MigrationInterface, QueryRunner } from "typeorm";

export class connectionCode1679246462308 implements MigrationInterface {
    name = 'connectionCode1679246462308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`connection_stream\` (\`id\` varchar(36) NOT NULL, \`connectionCode\` varchar(200) NULL, \`message\` mediumtext NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`connection_stream\``);
    }

}
