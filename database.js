import {randonUUID} from 'node:crypto'


export class DatabaseMemory {

    #videos = new map();

    list() {
        return  this.#videos.values()
    };

    create(video) {

        const videosId = randonUUID()

        this.#videos.set(videosId, video)
    };

    update(id, video) {
        this.#videos.set(id, video)
    };

    delete(id) {
        this.#videos.delete(id)
    };


};