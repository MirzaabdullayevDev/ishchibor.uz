const NavbarLogo = require("../models/HomePage/Navbar/NavbarLogo");
const NavbarMenu = require("../models/HomePage/Navbar/NavbarMenu");
const toDelete = require("../middleware/toDelete");

// Navbar Logo

exports.NavbarLogo = async (req, res) => {
  if (req.file) {
    const navbarLogo = new NavbarLogo({
      image: req.file.filename,
    });
    await navbarLogo.save();
    const Logos = await NavbarLogo.find();
    if (Logos.length > 1) {
      const deleteImg = await NavbarLogo.find({})
        .sort({
          _id: 1,
        })
        .limit(1);
      const { image } = await NavbarLogo.findById(deleteImg);
      toDelete(image);
      NavbarLogo.findByIdAndDelete(deleteImg, async (err, data) => {
        if (err) {
          const Logo = await NavbarLogo.find();
          res.status(403).json({ message: "Error", data: Logo });
        } else {
          console.log("Delete image");
        }
      });
    }
    const Logo = await NavbarLogo.find();
    res.status(201).json({ message: "Logo saved successfully", data: Logo });
  } else {
    const Logo = await NavbarLogo.find();
    res.status(404).json({ message: "Logo Upload Required!!!", data: Logo });
  }
};

exports.NavbarLogoEdit = async (req, res) => {
  const logo = await NavbarLogo.findById(req.params.id);
  const updateLogo = req.body;
  if (req.file) {
    toDelete(logo.image);
    updateLogo.image = req.file.filename;
  }
  const editLogo = await NavbarLogo.findByIdAndUpdate(
    req.params.id,
    updateLogo
  );
  res.status(201).json({ message: "Success", data: editLogo });
};

exports.NavbarLogoDelete = async (req, res) => {
  const Id = await NavbarLogo.findById(req.params.id);
  toDelete(Id.image);
  await NavbarLogo.findByIdAndDelete(req.params.id);
  const Logo = await NavbarLogo.find();
  res.status(200).json({ message: "Success", data: Logo });
};

// Navbar Menu

exports.NavbarMenuAdd = async (req, res) => {
  const { name, phone } = req.body;

  if (req.file) {
    const menuAdd = new NavbarMenu({
      name,
      phone,
      image: req.file.filename,
    });
    await menuAdd.save();
    res.status(200).json({ message: "Success", data: menuAdd });
  } else {
    const { name, phone } = req.body;

    const menuAdd = new NavbarMenu({
      name,
      phone,
    });

    await menuAdd.save();
    res.status(200).json({ message: "Success", data: menuAdd });
  }
};

exports.NavbarMenuEdit = async (req, res) => {
  const menuEdit = await NavbarMenu.findById(req.params.id);
  const { name, phone, image } = req.body;
  if (req.file) {
    toDelete(menuEdit.image);
    updateMenu.image = req.file.filename;
  }

  console.log(updateMenu);

  const EditMenu = await NavbarLogo.findByIdAndUpdate(
    req.params.id,
    name,
  );
  res.status(201).json({ message: "Success", data: EditMenu });
};
