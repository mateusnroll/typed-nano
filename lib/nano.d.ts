declare module 'nano' {

  interface NanoDatabase {
    create(databaseName: String, callback: (error, result) => void): void;

    get(databaseName: String, callback: (error, result) => void): void;

    destroy(databaseName: String, callback?: (error, result) => void): void;

    list(callback: (error, result) => void): void;

    compact(databaseName: String, designDocName?: String, callback?: (error, result) => void): void;

    replicate(sourceDatabaseName: String, targetDatabaseUrl: String, params?: Object, callback?: (error, result) => void): void;

    changes(databaseName: String, params: Object, callback: (error, result) => void): void;

    follow(databaseName: String, params: Object, callback: (error, result) => void): void;

    info(callback: (error, result) => void): void;

    use(databaseName: String): NanoDocument;

    scope(databaseName: String): NanoDocument;
  }

  interface NanoDocument {
    insert(doc: Object, params: String | Object, callback: (error, result) => void): void;

    destroy(id: String, rev: String, callback: (error, result) => void): void;

    get(id: String, params: Object, callback: (error, result) => void): void;

    head(id: String, callback: (error, meta, headers) => void): void;

    copy(sourceDocId: string, destinationDocId: string, params: Object, callback: (error, meta, headers) => void ): void;

    bulk(documents: [Object], params: Object, callback: (error, results) => void): void;

    list(params: Object, callback: (error, results) => void): void;

    fetch(documentIds: [String], params: Object, callback: (error, results) => void): void;

    fetchRevs(documentIds: [String], params: Object, callback: (error, results) => void): void;

    multipart: NanoMultipart;

    attachment: NanoAttachment;

    /** VIEWS */

    view(designDocumentId: String, viewName: String, params: Object, callback: (error, results) => void): void;

    viewWithList(designDocumentId: String, viewName: String, params: Object, callback: (error, results) => void): void;

    show(designDocumentId: String, showDocumentName: String, documentId: String, params: Object, callback: (error, results) => void): void;

    atomic(designDocumentId: String, updateName: String, documentId: String, updateBody: Object, callback: (error, results) => void): void;

    search(designDocumentId: String, searchName: String, params: Object, callback: (error, results) => void): void;
  }

  interface NanoMultipart {
    insert(document: Object, attachments: [Object], params: Object, callback: (error, results) => void): void;

    get(documentId: String, params: Object, callback: (error, results) => void): void;
  }

  interface NanoAttachment {
    insert(documentId: String, attachmentName: String, attachmentData: any, contentType: String, params: Object, callback: (error, results) => void): void;

    get(documentId: String, attachmentName: String, params: Object, callback?: (error, results) => void): void;
  }

  /** --- EXPORTS --- */

  export let db:NanoDatabase;

  export function request(params: Object, callback: (error, results) => void): void;

  export function relax(params: Object, callback: (error, results) => void): void;

  export function dinosaur(params: Object, callback: (error, results) => void): void;

  export function config(params: Object): Object; // Not sure

  export function updates(params: Object, callback: (error, results) => void): void;

}
