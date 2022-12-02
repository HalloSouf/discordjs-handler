import { BitFieldResolvable, Client, Collection, GatewayIntentsString, Interaction, REST, SlashCommandBuilder } from 'discord.js';

export interface ICommand {
  data: SlashCommandBuilder;
  execute: (client: IHalloClient, interaction: Interaction) => void;
}

export interface IHalloClient extends Client {
  logger: ILogger;
  commands: ICommandManager;
  events: IEventManager;
  restApi: IRestManager;
  utils: IUtilsManager;
  authenticate: (token: string) => Promise<void>;
}

export interface IRestManager {
  logger: ILogger;
  DiscordRest: REST;
  registerSlashCommands: () => void;
}

export interface ICommandManager {
  get: (name: string) => ICommand | undefined;
  all: Collection<string, ICommand>;
  load: (dir: string) => void;
}

export interface IEventManager {
  load: (dir: string) => void;
}

export interface IUtilsManager {
  colors: IColor;
  emotes: IEmote;
}

export interface ILogger {
  info: (message: string | object) => void;
  ready: (message: string | object) => void;
  error: (message: string | object) => void;
}

export interface IConfig {
  intents: BitFieldResolvable<GatewayIntentsString, number>;
  environment: string;
  restVersion: '10' | '9';
  colors: IColor;
}

export interface IColor {
  main: number;
  done: number;
  fail: number;
  error: number;
  pending: number;
}

export interface IEmote {
  done: string;
  fail: string;
  error: string;
  pending: string;
}

export interface IEventBaseProps {
  name: string;
  once?: boolean;
}
