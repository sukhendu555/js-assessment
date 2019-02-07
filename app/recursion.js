recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    var file_list = [];
    var file_indirs = [];
    function get_files(obj) {
      if (obj.files.length > 0) {
        file_list = file_list.concat(obj.files);
        if (dirName == obj.dirName) {
          file_indirs = file_indirs.concat(obj.files);
        }
      }
      if (obj.subDirs.length > 0) {
        for (var i = 0; i < obj.subDirs.length; i++) {
          get_files(obj.subDirs[i]);
        }
      } else {
        return false;
      }
    }
    get_files(data);
    if (dirName){
      return file_indirs;
    }
    return file_list;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    var fibs = [1,1];
    function fibonacci(num) {
      if (fibs[num-1]) return fibs[num-1];
      else{
        for (var i = fibs.length; i < num; i++){
          fibs[i] = fibs[i - 1] + fibs[i - 2];
        }
      }
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
    var result = fibonacci(n);
    return result;
  },
};
