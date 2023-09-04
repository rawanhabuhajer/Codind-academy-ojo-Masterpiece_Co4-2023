const Service = require("../models/ServicesModal");

exports.getAllServices = async (req, res, next) => {
  const services = await Service.find();

  res.status(200).json({
    status: "success",
    results: services.length,
    data: {
      services,
    },
  });
};

exports.getService = async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    throw Error("No service found with that ID", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      service,
    },
  });
};

exports.createService = async (req, res, next) => {
  try {
    const { servicename, servicePrice, category } = req.body;
    const newService = await Service.create({
      servicename,
      servicePrice,
      category,
    });

    res.status(201).json({
      status: "success",
      data: {
        service: newService,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error creating service",
      error: err.message,
    });
  }
};

// };

exports.updateService = async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!service) {
    throw Error("No service found with that ID", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      service,
    },
  });
};

exports.deleteService = async (req, res, next) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  console.log(service);
  if (!service) {
    throw Error("No service found with that ID", 404);
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
