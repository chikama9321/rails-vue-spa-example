class Custom::RegistrationsController < DeviseTokenAuth::RegistrationsController

  def create
    super do |resource|
      resource.do_something(extra)
    end
  end

end