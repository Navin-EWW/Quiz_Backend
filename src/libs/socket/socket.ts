// import { Emitter } from "@socket.io/redis-emitter";
// import { createClient } from "redis";
// import { env } from "../../env";

interface Events {
  basicEmit: (a: number, b: string, c: number[]) => void;
}

const IO = async () => {
  // const url = env.redis.url;
  // console.log(url,"-------------------------url")
//   const redisClient = createClient({
//     password: 'STQc0oOntWhU5ZAmtO3NQYoDwkiXjc2K',
//     username:'default',
//     name:"Navin-free-db",
//     database:0,
//     socket: {
//         host: 'redis-19512.c325.us-east-1-4.ec2.cloud.redislabs.com',
//         port: 19512
//     }
// });

  // await redisClient.connect();
  // return new Emitter<Events>(redisClient);
};

/**
 *  connects to socket server adapter and emits data
 * @param namespace
 * @param event
 * @param data
 */

const broadcastTo = async (namespace: any, event: any, data: any) => {
  const io = await IO();
  // const response = io.to(namespace).emit(event, data);
  // console.log("response for socket >>>", response);
};

export class SocketEmitter {
  public static async sendMessage(namespace: any, event: any, data: any) {
    return await broadcastTo(namespace, event, data);
  }
}
