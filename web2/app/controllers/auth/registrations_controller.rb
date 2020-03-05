class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  def create
    super do |resource|
      puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      puts resource.uid
      puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    end
  end
end
