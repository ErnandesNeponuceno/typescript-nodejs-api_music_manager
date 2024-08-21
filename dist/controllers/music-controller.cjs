var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controllers/music-controller.ts
var music_controller_exports = {};
__export(music_controller_exports, {
  getListMusic: () => getListMusic
});
module.exports = __toCommonJS(music_controller_exports);

// src/data/music-repository.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var pathData = import_path.default.join(__dirname, "../data/music.json");
var repositoryMusic = async () => {
  const rawdata = import_fs.default.readFileSync(pathData, "utf-8");
  const jsonFIle = JSON.parse(rawdata);
  return jsonFIle;
};

// src/services/list-music-service.ts
var serviceListMusic = async () => {
  const data = await repositoryMusic();
  return data;
};

// src/controllers/music-controller.ts
var getListMusic = async (req, res) => {
  const content = await serviceListMusic();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(content)
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getListMusic
});
