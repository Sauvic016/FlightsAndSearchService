const { ServerError, ClientError } = require("../utils/error/");

class CrudService {
  constructor(repository) {
    if (!CrudService.instance) {
      this.repository = repository;
      CrudService.instance = this;
    }
    return CrudService.instance;
  }
  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      throw new ServerError();
    }
  }

  async destroy(id) {
    try {
      const response = await this.repository.destroy(id);
      return response;
    } catch (error) {
      throw new ServerError();
    }
  }

  async get(id) {
    try {
      const response = await this.repository.get(id);
      if (!response) {
        throw new ClientError();
      }
      return response;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }

  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      throw new ServerError();
    }
  }

  async update(id, data) {
    try {
      const checkdata = await this.get(id);
      const response = await this.repository.update(checkdata.id, data);
      return response;
    } catch (error) {
      if (error.name) {
        throw error;
      }
      throw new ServerError();
    }
  }
}

module.exports = CrudService;
