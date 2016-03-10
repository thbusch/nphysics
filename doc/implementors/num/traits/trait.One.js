(function() {var implementors = {};
implementors['num'] = [];implementors['nalgebra'] = ["impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec1.html' title='nalgebra::Vec1'>Vec1</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec2.html' title='nalgebra::Vec2'>Vec2</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec3.html' title='nalgebra::Vec3'>Vec3</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec4.html' title='nalgebra::Vec4'>Vec4</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec5.html' title='nalgebra::Vec5'>Vec5</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec6.html' title='nalgebra::Vec6'>Vec6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.UnitQuat.html' title='nalgebra::UnitQuat'>UnitQuat</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Quat.html' title='nalgebra::Quat'>Quat</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat1.html' title='nalgebra::Mat1'>Mat1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat2.html' title='nalgebra::Mat2'>Mat2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat3.html' title='nalgebra::Mat3'>Mat3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat4.html' title='nalgebra::Mat4'>Mat4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat5.html' title='nalgebra::Mat5'>Mat5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat6.html' title='nalgebra::Mat6'>Mat6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Rot2.html' title='nalgebra::Rot2'>Rot2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Rot3.html' title='nalgebra::Rot3'>Rot3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Rot4.html' title='nalgebra::Rot4'>Rot4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseFloat.html' title='nalgebra::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Iso2.html' title='nalgebra::Iso2'>Iso2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseFloat.html' title='nalgebra::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Iso3.html' title='nalgebra::Iso3'>Iso3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseFloat.html' title='nalgebra::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Iso4.html' title='nalgebra::Iso4'>Iso4</a>&lt;N&gt;",];implementors['num'] = [];implementors['nalgebra'] = ["impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec1.html' title='nalgebra::Vec1'>Vec1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;N, Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;N, Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec2.html' title='nalgebra::Vec2'>Vec2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;N, Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;N, Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec3.html' title='nalgebra::Vec3'>Vec3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;N, Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;N, Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec4.html' title='nalgebra::Vec4'>Vec4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;N, Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;N, Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec5.html' title='nalgebra::Vec5'>Vec5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;N, Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;N, Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Vec6.html' title='nalgebra::Vec6'>Vec6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;N, Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;N, Output=N&gt;</span>","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.UnitQuat.html' title='nalgebra::UnitQuat'>UnitQuat</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Quat.html' title='nalgebra::Quat'>Quat</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;N, Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;N, Output=N&gt;</span>","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat1.html' title='nalgebra::Mat1'>Mat1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat2.html' title='nalgebra::Mat2'>Mat2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat3.html' title='nalgebra::Mat3'>Mat3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat4.html' title='nalgebra::Mat4'>Mat4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat5.html' title='nalgebra::Mat5'>Mat5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Mat6.html' title='nalgebra::Mat6'>Mat6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Rot2.html' title='nalgebra::Rot2'>Rot2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Rot3.html' title='nalgebra::Rot3'>Rot3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseNum.html' title='nalgebra::BaseNum'>BaseNum</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Rot4.html' title='nalgebra::Rot4'>Rot4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseFloat.html' title='nalgebra::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Iso2.html' title='nalgebra::Iso2'>Iso2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseFloat.html' title='nalgebra::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Iso3.html' title='nalgebra::Iso3'>Iso3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='nalgebra/trait.BaseFloat.html' title='nalgebra::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='num/traits/trait.One.html' title='num::traits::One'>One</a> for <a class='struct' href='nalgebra/struct.Iso4.html' title='nalgebra::Iso4'>Iso4</a>&lt;N&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
