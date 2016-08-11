declare module 'nano' {

  function nano(connectionUrl: string): NanoDatabase;
  export = nano;

  interface NanoDatabase {
    create(databaseName: string, callback: (error, result) => void): void;

    get(databaseName: string, callback: (error, result) => void): void;

    destroy(databaseName: string, callback?: (error, result) => void): void;

    list(callback: (error, result) => void): void;

    compact(databaseName: string, designDocName?: string, callback?: (error, result) => void): void;

    replicate(sourceDatabaseName: string, targetDatabaseUrl: string, params?: Object, callback?: (error, result) => void): void;

    changes(databaseName: string, params: Object, callback: (error, result) => void): void;

    follow(databaseName: string, params: Object, callback: (error, result) => void): void;

    info(callback: (error, result) => void): void;

    use(databaseName: string): NanoDocument;

    scope(databaseName: string): NanoDocument;
  }

  interface NanoDocument {
    insert(doc: Object, params: string | Object, callback: (error, result) => void): void;

    destroy(id: string, rev: string, callback: (error, result) => void): void;

    get(id: string, params: Object, callback: (error, result) => void): void;

    head(id: string, callback: (error, meta, headers) => void): void;

    copy(sourceDocId: string, destinationDocId: string, params: Object, callback: (error, meta, headers) => void ): void;

    bulk(documents: Object[], params: Object, callback: (error, results) => void): void;

    list(params: Object, callback: (error, results) => void): void;

    fetch(documentIds: string[], params: Object, callback: (error, results) => void): void;

    fetchRevs(documentIds: string[], params: Object, callback: (error, results) => void): void;

    multipart: NanoMultipart;

    attachment: NanoAttachment;

    /** VIEWS */

    view(designDocumentId: string, viewName: string, params: Object, callback: (error, results) => void): void;

    viewWithList(designDocumentId: string, viewName: string, params: Object, callback: (error, results) => void): void;

    show(designDocumentId: string, showDocumentName: string, documentId: string, params: Object, callback: (error, results) => void): void;

    atomic(designDocumentId: string, updateName: string, documentId: string, updateBody: Object, callback: (error, results) => void): void;

    search(designDocumentId: string, searchName: string, params: Object, callback: (error, results) => void): void;
  }

  interface NanoMultipart {
    insert(document: Object, attachments: Object[], params: Object, callback: (error, results) => void): void;

    get(documentId: string, params: Object, callback: (error, results) => void): void;
  }

  interface NanoAttachment {
    insert(documentId: string, attachmentName: string, attachmentData: any, contentType: string, params: Object, callback: (error, results) => void): void;

    get(documentId: string, attachmentName: string, params: Object, callback: (error, results) => void): void;
  }
}
