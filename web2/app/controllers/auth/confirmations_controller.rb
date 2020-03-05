class Auth::ConfirmationsController < DeviseTokenAuth::ConfirmationsController
  def show
    @resource = resource_class.confirm_by_token(resource_params[:confirmation_token])

    puts @resource.errors.inspect

    if @resource.errors.empty?

      redirect_header_options = { account_confirmation_success: true }

      if signed_in?(resource_name)
        token = signed_in_resource.create_token

        redirect_headers = build_redirect_headers(token.token,
                                                  token.client,
                                                  redirect_header_options)

        redirect_to_link = signed_in_resource.build_auth_url(redirect_url, redirect_headers)
        puts "hogehoge"
      else
        redirect_to_link = DeviseTokenAuth::Url.generate(redirect_url, redirect_header_options)
        puts "fugafuga"
      end

      puts "@@@@@@@@@@@@@@@@@@@@@@@"
      puts redirect_to_link
      puts redirect_url
      puts "@@@@@@@@@@@@@@@@@@@@@@@"
      redirect_to(redirect_url)
    else
      raise ActionController::RoutingError, 'Not Found'
    end
  end
end
