import dataSourceConfig from "@/config/typeOrm.config";

export type ParameterType = {
  value: any;
  index: number;
};

export function getQueryRunnerArgument(args: any[]): ParameterType | undefined {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === undefined) {
      continue;
    } 
    const param = args[i];
    if (`${param.constructor.name}`.includes('QueryRunner')) {
      return {
        value: param,
        index: i,
      };
    }
  }

  return undefined;
}

/**
 * This Decorator is used to start a QueryRunner with or without a transaction.
 * If you prefer to control the transaction, just pass the queryRunner parameter in the method.
 *
 * Whenever using this decorator, it is necessary to have the parameter 'queryRunner' in the method body,
 * and a property 'connection' in current service class.
 *
 * @param transactional
 */
export function setQueryRunner(
  transactional?: boolean,
  connectionName?: string,
) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const parameter: ParameterType = getQueryRunnerArgument(args);
      if (parameter) {
        return await original.apply(this, [...args]);
      }

      const connection = dataSourceConfig
      const newQueryRunner = connection.createQueryRunner();
      await newQueryRunner.connect();
      if (transactional) {
        await newQueryRunner.startTransaction();
      }

      try {
        args[args.length] = newQueryRunner;
        const result = await original.apply(this, [...args]);
        if (transactional) {
          await newQueryRunner.commitTransaction();
        }
        return result;
      } catch (error) {
        if (transactional) {
          if (newQueryRunner.isTransactionActive) {
            await newQueryRunner.rollbackTransaction();
          }
        }
        throw error;
      } finally {
        await newQueryRunner.release();
      }
    };
    return descriptor;
  };
}