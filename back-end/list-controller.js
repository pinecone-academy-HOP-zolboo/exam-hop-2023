const TaskModel = require("../back-end/model");

exports.getList = async (req, res) => {
  const lists = await TaskModel.find();

  res.status("200").json(lists);
};

exports.getTest = (req, res) =>{
    res.send("This is test endpoint")
}

exports.Add = async (req, res) => {
  try {
    await TaskModel.create(req.body);

    res.status("200").json({ message: "success" });
  } catch (err) {
    res.status("400").json({ message: "failed" });
  }
};

module.exports.getCount = async (req, res) => {
    
};

module.exports.Checked = async (req, res) => {
    const { id } = req.params;
    
    try {
      await PostModel.findById(id);
      const posts = await PostModel.findById(req.body.postId).populate("owner");
      console.log(posts)
  
      res.status(200).json(post[0], {message: true, data: posts});
    } catch (err) {
      res.status(400).json(err);
    }
  };
exports.Delete = async (req, res) => {
  const { id } = req.params;

  try {
    await PostModel.findByIdAndDelete(id);

    res.status(200).json("Deleted");
  } catch (err) {
    res.status(400).json("Not found");
  }
};

exports.Update = async (req, res) => {
  const { id } = req.params;
  try {
    await TaskModel.findByIdAndUpdate(id, req.body);

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};